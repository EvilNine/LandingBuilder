export const source = {
    type: 'intro',
    removable: true,
    draggable: true,
    droppable: true,
    activeOnRender: false,
    style: {
        'background-image': `url(https://images.pexels.com/photos/1051544/pexels-photo-1051544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
        'background-size': 'cover',
        'background-position': 'center center',
        'background-repeat': 'no-repeat'
    },
    components: `
        <div class="container">
            <div class="row align-items-center justify-content-center text-center w-100">
                <div class="col-12 col-xs-11 col-sm-10 col-md-9 col-lg-8">
                    <h1 class="display-3 fw-bold mb-5">Whoa, slow down there, maestro. There's a *New* Mexico?</h1>
                    <p class="lead mb-4">I'll keep it short and sweet — Family. Religion. Friendship. These are the three demons you must slay if you wish to succeed in business. I was saying "Boo-urns." Fat Tony is a cancer on this fair city! He is the cancer and I am the…uh…what cures cancer?</p>
                    <button class="btn btn-primary px-5" data-toggle="modal" data-target="#modalOrder">Buy this!</button>
                </div>
            </div>
        </div>
    `
}