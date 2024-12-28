
const dataLoad = async () =>{
    const response = await fetch('data.json');
    const data = await response.json();
    displayData(data); 
}

const displayData = (data) => {
    const tableBody = document.getElementById('table-body');
    
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.className = "hover:bg-gray-50"; 
        row.innerHTML = `
          <th class="text-sm font-semibold border border-gray-300 px-4 py-1">${item.course_id}</th>
          <td class="text-sm font-semibold border border-gray-300 px-8 py-1">${item.course_name}</td>
          <td class="text-sm font-semibold border border-gray-300 px-2 py-1 text-center">${item.credits}.00</td>
          <td class="text-sm font-semibold border border-gray-300 px-2 py-1 text-center">${item.mandatory}</td>
          <td class="text-sm font-semibold border border-gray-300 px-2 py-1 text-center"><label class="swap swap-rotate inline-flex items-center cursor-pointer">
            <input type="checkbox" class="hidden peer" />
            <!-- Swap On (Visible when checked) -->
            <div class="swap-on hidden peer-checked:block">
                <img class="w-4 h-4" src="${item.taken_right}" alt="Checked">
            </div>
            <!-- Swap Off (Visible when not checked) -->
            <div class="swap-off block peer-checked:hidden">
                <img class="w-4 h-4" src="${item.taken_close}" alt="Unchecked">
            </div>
            </label>
            </td>   	
        `;
        tableBody.appendChild(row);
      });
  };
  

const loadCategory = async () => {
   const res = await fetch('category.json');
   const data = await res.json();
   displayCategory(data.routes); 
}

const displayCategory = (data) =>{
   const routingContainer = document.getElementById("routing-container");
   data.forEach(route => {
     const div = document.createElement('div');
     div.innerHTML = `
      <button class="text-white hover:text-[#FFE993] hover:scale-110">${route.component}</button>
     `
     routingContainer.appendChild(div);
   })
}

dataLoad();
loadCategory();