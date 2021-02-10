const app = Vue.createApp({
    data() {
        return {
            showThis: true,
            value: "If there is Value, it will show.",
            nothing: "",
            mouseEventMsg: "",
            mouseX: 0,
            mouseY: 0,
            myArray: [{
                    title: "Meditation",
                    body: "Letterpress seitan chicharrones tumeric food truck crucifix fingerstache asymmetrical paleo chartreuse williamsburg before they sold out.",
                },
                {
                    title: "Microdosing ",
                    body: "Selvage truffaut distillery gentrify messenger bag swag austin kogi synth palo santo shoreditch narwhal brooklyn seitan.",
                },
                {
                    title: "Helvetica ",
                    body: "Jianbing banjo thundercats iPhone craft beer selvage drinking vinegar. ",
                },
            ],
            url: "https://duckduckgo.com",
        };
    },
    methods: {
        toggleShow() {
            this.showThis = !this.showThis;
        },
        mouseOverHndl(event, arg) {
            this.mouseEventMsg = event.type + " | " + arg;
        },
        mouseLeaveHndl(event) {
            this.mouseEventMsg = event.type;
        },
        mouseDblClickHndl(event) {
            this.mouseEventMsg = event.type;
        },
        mouseMoveHndl(event) {
            this.mouseX = event.x;
            this.mouseY = event.y;
        },
    },
});

app.mount('#app');