
function NavSwitcher () {
    var currentPage,
        stateHistory = [];
    this.switchNav = function(from){
        var l = stateHistory.length,
            state = window.location.hash;
        if (l === 0) {
            stateHistory.push(state);
            currentPage.attr("class", "page transition "+from );
            currentPage.find('.mask').css('display','block');
            return;
        }

        if (state === stateHistory[l-2]) {
            stateHistory.pop();
            currentPage.attr("class", "page transition "+from );
            currentPage.find('.mask').css('display','block');
        } else {
            stateHistory.push(state);
            currentPage.attr("class", "page transition center" );
            currentPage.find('.mask').css('display','none');
        }
    
    },
    this.init = function(obj){
        currentPage = obj.curPage;
    }
}
function PageSwitcher(){
    var currentPage,
        stateHistory = [];
    this.switchPage = function(){
        var l = stateHistory.length,
            state = window.location.hash;
    
        if(state == stateHistory[l-2]){
            page = currentPage.prev('.page');
            if(page && page.length > 0){
                currentPage.attr('class','page transition right100');
                currentPage = page;
                stateHistory.pop();
            }
        }else{
            page = currentPage.next('.page');

            if(page && page.length > 0){
                stateHistory.push(state);
                page.attr('class','page transition center');
                currentPage = page;
            }
        }
    },  
    this.init = function(obj){
        currentPage = obj.curPage;
        stateHistory.push(obj.curHash);
    }
}
