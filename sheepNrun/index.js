document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World');

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const background = new Background(ctx);
    const promise = background.init('assets/background2.png');

    const platforms = [
        new Platform(ctx),
        new Platform(ctx),
        new Gap(ctx),
        new Platform(ctx),
        new Platform(ctx),
        new Platform(ctx),
        new Gap(ctx),
        new Platform(ctx),
        new Gap(ctx),
    ];

    const platformPromises = platforms
        .map((platform, index) => {
            platform.x = index * platform.width;
            platform.y = 282;
            return platform;
        }).map((platform) => platform.init());

    const sheep = new Sheep(ctx);
    const sheepPromise = sheep.init();


    Promise.all([promise, ...platformPromises, sheepPromise]).then(() => {
        const loop = new Loop(ctx, sheep, background, platforms);
        sheep.y = 202;
        requestAnimationFrame(loop.step.bind(loop));
    });
});
