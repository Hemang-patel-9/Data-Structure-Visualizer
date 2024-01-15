document.getElementById('sort').addEventListener('click',()=>
{
	let value=document.getElementById('input').value;
	let arr=value.split(',');
	for(let a=0;a<arr.length;a++)
	{
		arr[a]=Number.parseFloat(arr[a]);
	}
	let min=Math.min(...arr);
	console.log(arr);
	//making the division for sort
	for(let a=0;a<arr.length;a++)
	{
		let parent=document.getElementById('items');
		let child=document.createElement('div');
		child.setAttribute('class','item');
		child.innerHTML=arr[a];
		parent.append(child);
	}
	bubbleSort(arr,min);
});

function bubbleSort(arr)
{
	for(let a=0;a<arr.length;a++)
	{
		for(let b=a+1;b<arr.length;b++)
		{
			if (Number.parseFloat(arr[a]) > Number.parseFloat(arr[b]))
			{
				let tmp=arr[a];
				arr[a]=arr[b];
				arr[b]=tmp;
			}
		}
	}
	console.log(arr);
}