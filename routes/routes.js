class List{
    '/'(res) {
        res.end('hello');
    }
}

const routerAttrList = Object.getOwnPropertyNames(List.prototype);

function isRouter(pathname) {
    return routerAttrList.find((item, index) => {

        if(pathname === item || pathname.startsWith(item) && (item !== '/')){
            return item;
        }else{
            return false;
        }
    })
}

module.exports = {
    isRouter,
    routerAttrList,
    list: new List()
}