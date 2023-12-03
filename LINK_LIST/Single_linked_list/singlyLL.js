//needed variables


//clicking event
document.getElementById('btnSearch').addEventListener('click',()=>
{
	let val=document.getElementById('searchInput').value;
	alert('click search button -> '+val);
});
document.getElementById('btnInsert').addEventListener('click',()=>
{
	let val=document.getElementById('insertInput').value;
	alert('click insert button--> '+val);
});
document.getElementById('btnDelete').addEventListener('click',()=>
{
	let val=document.getElementById('deleteInput').value;
	alert('click delete button -->'+val);
});