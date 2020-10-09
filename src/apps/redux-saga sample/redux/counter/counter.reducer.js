

export default (state = 0, action) => {
  switch(action.type){
    case 'INCR': return state + 1;
    default: return state;
  }
}