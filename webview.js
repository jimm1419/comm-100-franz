// orat.io integration
module.exports = (Franz) => {
    function getMessages() {
        let direct = 0;
        let indirect = 0;
        const elements = document.querySelectorAll('.Icon__promptNumber--WzKYV');
        for (let i = 0; i < elements.length; i++) {
            if (elements[i] && elements[i].innerHTML){
                try{
                    direct += parseInt(elements[i].innerHTML.trim());
                }catch(err){}
            }
        }

        Franz.setBadge(direct, indirect);
    }

    Franz.loop(getMessages);
}