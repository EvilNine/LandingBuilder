export const source = {
    type: 'intro',
    removable: true,
    draggable: true,
    droppable: true,
    activeOnRender: false,
    style: {
        'background-image': `url(https://htmlstream.com/preview/space-v1.6.1/assets/img/1920x1080/img4.jpg)`,
        'background-size': 'cover',
        'background-position': 'center center',
        'background-repeat': 'no-repeat'
    },
    components: `
        <div class="container py-5 py-md-0 w-100">
            <div class="row justify-content-lg-between align-items-lg-center">
                <div class="col-lg-5 mb-7 mb-lg-0">
                    <span class="d-block text-white text-uppercase mb-2">Join the change</span>
                    <h1 class="display-4 text-white mb-md-0">Space service that moves work forward</h1>
                </div>
                <div class="col-lg-5">
                    <div class="bg-white shadow-sm rounded p-4">
                        <div class="mb-4">
                            <h2 class="h4">Get started for free</h2>
                        </div>
                        <form>
                            <div class="mb-3">
                                <div class="input-group">
                                <input type="text" class="form-control" name="username" required="" placeholder="Enter your username" data-gjs-type="input" data-gjs-removable="false" data-gjs-editable="true">
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="input-group form">
                                    <input type="email" class="form-control" name="email" required="" placeholder="Enter your email address" data-gjs-type="input" data-gjs-removable="false" data-gjs-editable="true">
                                </div>
                            </div>
                            <button type="submit" class="btn btn-block btn-primary" data-gjs-removable="false" data-gjs-editable="true">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
}