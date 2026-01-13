const ADMIN={user:"aram",pass:"200411"};
let menu=[];

function doLogin(e){
  e.preventDefault();
  const u=document.getElementById('user').value, p=document.getElementById('pass').value;
  if(u===ADMIN.user && p===ADMIN.pass){
    document.getElementById('loginBox').style.display='none';
    document.getElementById('panel').style.display='block';
    loadMenu();
  }else{
    alert("Kullanıcı adı veya şifre yanlış!");
  }
}

function loadMenu(){
  // بيانات افتراضية
  menu=[
    {tr:"Yoğurtlu Semizotu",ar:"السلق بالزبادي",en:"Purslane w/ Yogurt",price:300},
    {tr:"Cacık",ar:"الخيار باللبن",en:"Cacık",price:150}
  ];
  renderTable();
}
function renderTable(){
  const tbody=document.querySelector('#menuTable tbody');
  tbody.innerHTML="";
  menu.forEach((row,idx)=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`
      <td><input value="${row.tr}" onchange="menu[${idx}].tr=this.value"></td>
      <td><input value="${row.ar}" onchange="menu[${idx}].ar=this.value"></td>
      <td><input value="${row.en}" onchange="menu[${idx}].en=this.value"></td>
      <td><input type="number" value="${row.price}" onchange="menu[${idx}].price=this.value"></td>
      <td><button onclick="delRow(${idx})">Sil</button></td>
    `;
    tbody.appendChild(tr);
  });
}
function addRow(){
  menu.push({tr:"",ar:"",en:"",price:""});
  renderTable();
}
function delRow(idx){menu.splice(idx,1);renderTable();}
function saveData(){
  localStorage.setItem("menuData",JSON.stringify(menu));
  alert("Kaydedildi! (localStorage)");
}
