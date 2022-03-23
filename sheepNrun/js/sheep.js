class Sheep {
    static idle = 'idle';
    lastUpdate = 0;

    constructor(context) {
        this.context = context;
        this.width = 325;
        this.height = 464;
        this.sheepHeight = 202;
        this.offsetX = 0;
        this.offsetY = 0;
        this.idleSteps = 0;

        this.images = {
            [Sheep.idle]: {image: new Image(), steps: 4}
        }
    }

    init() {
        return new Promise((resolve) => {
            this.images[Sheep.idle].image.src = 'assets/Black_Sheep_Idle.png';
            this.images[Sheep.idle].image.addEventListener('load', resolve);
        });
    }

    update(timestamp) {
        if (timestamp - this.lastUpdate > 200) {
            this.lastUpdate = timestamp;
            this.idleSteps++;
            this.idleSteps % this.images[Sheep.idle].steps === 0 ? this.offsetX = 0 : this.offsetX += 325;
        }
    }


    render() {
        this.context.drawImage(this.images[Sheep.idle].image, this.offsetX, this.offsetY, this.width, this.height, 0, this.sheepHeight, this.width / 3, this.height / 3);
    }
}
