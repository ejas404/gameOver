const customProperty = {
    get : (elem , property)=>{
        return parseFloat(getComputedStyle(elem).getPropertyValue(property)) || 0
    },
    set : (elem,property,value)=>{
        elem.style.setProperty(property,value)
    },
    increment : function (elem,property,inc){
        this.set(elem,property,this.get(elem,property)+inc)
    }

}

export {customProperty}