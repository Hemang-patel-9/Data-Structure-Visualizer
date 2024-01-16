let arr=[];
document.getElementById('sort').addEventListener('click',async ()=>
{
	let value=document.getElementById('input').value;
	arr=value.split(',');
	for(let a=0;a<arr.length;a++)
	{
		arr[a]=Number.parseFloat(arr[a]);
	}
	let min=Math.min(...arr);
	console.log(arr);
	//making the division for sort
	document.getElementById('items').innerHTML="";
	for(let a=0;a<arr.length;a++)
	{
		let parent=document.getElementById('items');
		let child=document.createElement('div');
		child.setAttribute('class','item');
		child.setAttribute('id',`item_${arr[a]}`);
		child.innerHTML=arr[a];
		await parent.append(child);
	}
	await bubbleSort(arr,min);
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
				swapping(arr[a],arr[b]);
			}
		}
	}
	console.log(arr);
}
async function swapping(first,second)
{
	let starting=arr.indexOf(first);
	let ending=arr.indexOf(second);
	console.log(starting,ending);

	let toppx=0;
	while(true)
	{
		document.getElementById(`item_${first}`).style.top=toppx;
		toppx++;
		await sleep(20);
		if(toppx==100)
		{
			break;
		}
	}
}
function sleep(ms)
{
	return new Promise((resolve,reject)=>
	{
		try{
			setTimeout(resolve,ms);
		}
		catch(arr)
		{
			console.log(reject,arr);
			alert("Sorry, we've got error while aniamtion.");
		}
	})
}