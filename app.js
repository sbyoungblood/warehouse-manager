
// SECTION VARIABLES

// Packages array total = 7, i.e. 0-6

const packages = [
  {
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}
]

let filters = []


// SECTION FUNCTIONS

function drawPackages(packageArr){
  let packageElement = document.getElementById('packages')
  let allPackages = ''
  packageArr.forEach(package => {
  allPackages += `<div>To: ${package.to}</div>
  <div>Tracking Number: ${package.trackingNumber}</div>
  <div>Priority: ${package.priorityLevel}</div>
  <div>Weight: ${package.weight}</div>
  <div>Fragile: ${package.isFragile}</div>
  `
  })
  packageElement.innerHTML = allPackages
}

// function applyFilters(){
//   let filteredPackages = packages.slice(0) // aka all packages
//   filters.forEach(filter =>{
//     if(filter == 'fragile'){
//       filteredPackages = filteredPackages.filter(package => package.isFragile)
//     }
//     if(filter == 'light'){
//       filteredPackages = filteredPackages.filter(package => package.weight < 6)
//     }
//   })
//   drawPackages(filteredPackages)
// }


function filterFragile(){
  const packagesFragile = packages.filter(package => package.isFragile)
  drawPackages(packagesFragile)
  // filters.push('fragile')
  // applyFilters()
  console.log(packagesFragile);
}
function filterHeavy(){
  const packagesHeavy = packages.filter(package => package.weight >= 6)
  drawPackages(packagesHeavy)
  console.log(packagesHeavy);
}
function filterLight(){
  const packagesLight = packages.filter(package => package.weight < 6)
  // filters.push('light')
  // applyFilters()
  drawPackages(packagesLight)
  console.log(packagesLight);
}
function filterPriority(){
  const packagesPriority = packages.filter(package => package.priorityLevel == 'express')
  drawPackages(packagesPriority)
  console.log(packagesPriority);
}

function showAllPackages(){
  // filters = []
  // applyFilters()
  drawPackages(packages)
  console.log(packages);
}




// SECTION INITIALIZATION (RUNS WHEN PAGE LOADS)

drawPackages(packages)