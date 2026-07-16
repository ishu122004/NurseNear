// ---------- Nurse Data (stand-in for what a real backend would return) ----------
const nursesData = [
  { id: "NR001", name: "Sara", img: "./images/nurse1.jpg", specialty: "General Care", experience: 2, frequency: "Weekly", gender: "Female", language: ["English"], distance: "Within 5km" },
  { id: "NR002", name: "Davis", img: "./images/nurse1.jpg", specialty: "Wound Care", experience: 3, frequency: "Monthly", gender: "Male", language: ["English", "Tamil"], distance: "Within 25km" },
  { id: "NR003", name: "Olivia", img: "./images/nurse1.jpg", specialty: "Pediatric Care", experience: 2, frequency: "Weekly", gender: "Female", language: ["English", "Tamil"], distance: "Within 15km" },
  { id: "NR004", name: "Ananya", img: "./images/nurse1.jpg", specialty: "Maternity & Newborn Care", experience: 1, frequency: "Daily", gender: "Male", language: ["English", "Tamil"], distance: "Within 5km" },
  { id: "NR005", name: "Priya", img: "./images/nurse1.jpg", specialty: "Post-Surgery Care", experience: 5, frequency: "Daily", gender: "Female", language: ["English", "Tamil"], distance: "Within 25km" },
  { id: "NR006", name: "Ramya", img: "./images/nurse1.jpg", specialty: "Injection & Medication Administration", experience: 10, frequency: "Daily", gender: "Male", language: ["English", "Tamil"], distance: "Within 15km" }
];

// ---------- Simulate an API call: wrap setTimeout in a Promise ----------
function fetchNurses() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nursesData && nursesData.length > 0) {
        resolve(nursesData);
      } else {
        reject(new Error("No nurse data found"));
      }
    }, 800); // fake 800ms network delay
  });
}

// ---------- DOM references ----------
const resultsContainer = document.getElementById("results");
const filterCheckboxes = document.querySelectorAll(".filter-checkbox");

// ---------- Turn a number of years into the matching range label ----------
function getExperienceRange(years) {
  if (years <= 2) return "0-2 years";
  if (years <= 5) return "3-5 Years";
  return "5+ Years";
}

// ---------- Build one card's HTML ----------
function createNurseCard(nurse) {
  return `
    <div class="flex flex-col border-none rounded-xl shadow-md p-4 bg-white h-full">
      <div class="flex justify-center mb-2">
        <img src="${nurse.img}" class="w-28 h-28 rounded-lg object-cover">
      </div>
      <div class="flex-1">
        <h1 class="text-xl font-bold text-center mb-2 text-blue-600">${nurse.name}</h1>
        <p class="mb-1"><span class="font-semibold">Nurse ID:</span><span class="pl-1">${nurse.id}</span></p>
        <p class="mb-1"><span class="font-semibold">Speciality:</span><span class="pl-1">${nurse.specialty}</span></p>
        <p class="mb-1"><span class="font-semibold">Experience:</span><span class="pl-1">${nurse.experience} years</span></p>
        <p class="mb-1"><span class="font-semibold">Availability:</span><span class="pl-1 text-blue-600">${nurse.frequency}</span></p>
        <p class="mb-1"><span class="font-semibold">Gender:</span><span class="pl-1">${nurse.gender}</span></p>
        <p class="mb-1"><span class="font-semibold">Language:</span><span class="pl-1">${nurse.language.join("/")}</span></p>
        <p class="mb-1"><span class="font-semibold">Distance:</span><span class="pl-1">${nurse.distance}</span></p>
      </div>
      <button class="p-2 bg-blue-600 rounded-xl text-white mt-3 font-semibold hover:bg-blue-700 transition-colors">Book now!</button>
    </div>
  `;
}

// ---------- Render nurse cards into the results section ----------
function renderNurses(nurseList) {
  if (nurseList.length === 0) {
    resultsContainer.innerHTML = `<p class="text-center text-slate-500 col-span-full p-6">No nurses match your filters.</p>`;
    return;
  }
  resultsContainer.innerHTML = nurseList.map(createNurseCard).join("");
}

// ---------- Loading state while "fetching" ----------
function showLoading() {
  resultsContainer.innerHTML = `<p class="text-center text-slate-500 col-span-full p-6">Loading nurses...</p>`;
}

// ---------- Collect checked filters, grouped by category using a Map + Set ----------
function getActiveFilters() {
  const filters = new Map(); // category -> Set of checked values

  filterCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const category = checkbox.dataset.category;
      const value = checkbox.value;

      if (!filters.has(category)) {
        filters.set(category, new Set());
      }
      filters.get(category).add(value);
    }
  });

  return filters;
}

// ---------- Filter the nurse list based on active filters ----------
function applyFilters(nurses, filters) {
  return nurses.filter((nurse) => {
    for (const [category, values] of filters) {
      if (values.size === 0) continue;

      switch (category) {
        case "specialty":
          if (!values.has(nurse.specialty)) return false;
          break;
        case "frequency":
          if (!values.has(nurse.frequency)) return false;
          break;
        case "experience":
          if (!values.has(getExperienceRange(nurse.experience))) return false;
          break;
        case "gender":
          if (!values.has(nurse.gender)) return false;
          break;
        case "language":
          if (![...values].some((lang) => nurse.language.includes(lang))) return false;
          break;
        case "distance":
          if (!values.has(nurse.distance)) return false;
          break;
      }
    }
    return true;
  });
}

// ---------- Main flow: fetch -> filter -> render (async/await + try/catch) ----------
async function loadAndDisplayNurses() {
  showLoading();
  try {
    const allNurses = await fetchNurses();
    const activeFilters = getActiveFilters();
    const filteredNurses = applyFilters(allNurses, activeFilters);
    renderNurses(filteredNurses);
  } catch (error) {
    resultsContainer.innerHTML = `<p class="text-center text-red-500 col-span-full p-6">Something went wrong: ${error.message}</p>`;
  }
}

// ---------- Re-run filtering whenever any checkbox changes ----------
filterCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", loadAndDisplayNurses);
});

// ---------- Load nurses when the page first opens ----------
document.addEventListener("DOMContentLoaded", loadAndDisplayNurses);

// ------------others error----------------
var others = document.getElementById("others")
var otherinp = document.getElementById("othersinp")
var othersp = document.getElementById("othersp")

others.addEventListener("change",() =>{
  othersinp.style.display = others.checked ? "block": "none"
  othersp.style.display = "none"
})
othersinp.addEventListener("input",()=>{
    othersp.style.display = othersinp.value.trim().length >0? "block":"none"
})