// https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
export const source = {
    type: 'intro',
    removable: true,
    draggable: true,
    droppable: true,
    activeOnRender: false,
    style: {
        'background-image': `url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
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
                </div>
            </div>
            <div class="row w-100 justify-content-center">
                <div class="col-12 col-xs-11 col-sm-10 col-md-9 col-lg-8">
                    <form action="">
                        <div class="row w-100">
                            <div class="col-12 col-md-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control requiredField" placeholder="Ваше имя" name="name" data-gjs-type="input" data-gjs-removable="false" data-gjs-editable="true">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="mb-3">
                                    <input type="text" class="form-control requiredField" name="phone" placeholder="Ваш телефон" data-gjs-type="input" data-gjs-removable="false" data-gjs-editable="true">
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" data-gjs-removable="false" data-gjs-editable="true">Отправить</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    `
}