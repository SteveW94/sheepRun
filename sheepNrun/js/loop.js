class Loop {

    constructor(context, player, background, platforms) {
        this.context = context;
        this.sheep = player;
        this.background = background;
        this.platforms = platforms;
        this.lastUpdate = 0;
    }

    update(timestamp) {
        this.sheep.update(timestamp);

        this.platforms = this.platforms.sort((a, b) => {
            //debugger;
            return b.x - a.x;
        });

        if ((timestamp - this.lastUpdate) > 35) {
            this.lastUpdate = timestamp;
            this.platforms.forEach((platform, index) => {
                platform.update(index, this.platforms[this.platforms.length -1])
            });
        }
    }

    render() {
        this.background.render(this.context.canvas.clientWidth, this.context.canvas.height);
        this.platforms.forEach((platform) => platform.render());
        this.sheep.render();
    }

    step(timestamp) {
        this.update(timestamp);
        this.render();
        requestAnimationFrame(this.step.bind(this));
    }

}
