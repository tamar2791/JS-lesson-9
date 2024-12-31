let id=1
const HtmlElement=function(type,textContent='') {
    this.id=id
    id+=1
    this.type=type
    this.textContent=textContent
};
HtmlElement.prototype.render=function(ob=this){
    let elem=document.createElement(ob.type)
    elem.textContent=ob.textContent
    elem.id='elem'+ob.id
    return elem
}
const ImageElement=function(src,alt){
    HtmlElement.call(this,'img')
    this.src=src
    this.alt=alt
}
ImageElement.prototype=Object.create(HtmlElement.prototype)
ImageElement.prototype.constructor=ImageElement
ImageElement.prototype.render=function(){
    let elem=HtmlElement.prototype.render(this)
    elem.src=this.src
    elem.alt=this.alt
    return elem
}
const SelectElement=function(options){
    console.log(options);
    this.options=[...options]
    console.log(this.options);
    HtmlElement.call(this,'select')
}
SelectElement.prototype=Object.create(HtmlElement.prototype)
SelectElement.prototype.constructor=SelectElement
SelectElement.prototype.render=function(){
    let elem=HtmlElement.prototype.render(this)
    let op
    for (let i = 0; i < this.options.length; i++) {
        op=document.createElement("option")
        op.textContent=this.options[i]
        elem.appendChild(op)
    }
    return elem
}
const createElem=()=>{
    const elem=new HtmlElement(document.getElementById("ty_el").value,document.getElementById("te_el").value)
    const res=document.getElementById("res")
    res.appendChild(elem.render())
    document.getElementById("ty_el").value=''
    document.getElementById("te_el").value=''
}
const createImg=()=>{
    let img=new ImageElement(document.getElementById("s_i").value,document.getElementById("a_i").value)
    const res=document.getElementById("res")
    res.appendChild(img.render())
    document.getElementById("s_i").value=''
    document.getElementById("a_i").value=''
}
const createSelect=()=>{
    let options=document.getElementById("op").value.split(',')
    let elem=new SelectElement(options)
    const res=document.getElementById("res")
    res.appendChild(elem.render())
}