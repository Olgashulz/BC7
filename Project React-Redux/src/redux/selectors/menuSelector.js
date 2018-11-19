export const playNowLength =(state) => state.showPlayNow.length;

export const playNowSort = (state)=> state.showPlayNow.map(el => ({...el, release_date: new Date(el.release_date).getTime()})).sort((a, b)=> b.release_date - a.release_date);



export const comingSoonLength = (state) => state.comingSoon.length;

export const comingSoonSort = (state)=> state.comingSoon.map(el => ({...el,release_date: new Date(el.release_date).getTime()}));



export const favoriteLength = (state)=> state.showFavorite.length;

export const favoriteSort = (state)=> state.showFavorite.map( el => ({...el, release_date: new Date(el.release_date).getTime()}));