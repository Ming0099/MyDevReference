const player = {name : 'Thomas', rank : 'Midshipman', age : 25};

/* for ... in 문은 객체의 프로퍼티 키를 탐색한다. */
for(let prop in player){
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop + ':' + player[prop]);
}
