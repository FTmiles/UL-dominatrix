var x = document.body;
x.style.background = 'red';


class MyList {
	constructor(element){
		this.el = element
		this.arr = ['one', 'rider', 'killa', 'haha']
		this.start()
	}

	start(){
		this.update();


	}

	update(){
		this.el.innerHTML = ''
		for (let indx in this.arr){
			this.el.appendChild(this.itemHtmlMaker(this.arr[indx], indx))

		}

	}

		itemHtmlMaker(txt, ind){
		let itemCont = document.createElement('div')
		itemCont.className = 'd-flex justify-content-between border-bottom align-items-start'
		
		let leftDiv = document.createElement('div')
		leftDiv.textContent = txt;

		let btn = document.createElement('button')
		btn.textContent = 'Del'
		btn.className = 'float-end border-0 btn btn-sm btn-secondary'
		btn.addEventListener('click', ()=>{this.remove(ind)})

		itemCont.appendChild(leftDiv)
		itemCont.appendChild(btn)
		
		return itemCont
	}

	add(x){
		this.arr.push(x)
		this.update()
	}

	remove(ind){
		this.arr.splice(ind,1)
		this.update()
	}
}




