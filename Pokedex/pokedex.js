class Pokedex {
constructor() {
    this.bag = [];
    this.lapsedTime = 0;
    this.timer = 0
}

catch(pokemon_name) {
    return this.bag.push(pokemon_name);
}

wait(ms) {
    function printWaiting () {
        return 'Waiting';
    }
    setTimeout(printWaiting, ms);
    this.lapsedTime += ms;
    return this.lapsedTime;
}

timer_total() {
    return this.lapsedTime;
}

all() {
    return this.bag;
}

};

module.exports = Pokedex;