<template>
  <div class>
    <div class="has-text-centered">{{ value || "Nothing" }}</div>

    <div class="content">
      <p class="title">v-if</p>
      <div class="card">
        <button class="button is-primary" @click="toggleShow">
          <span v-if="showThis">Hide</span>
          <span v-else>Show</span>
        </button>
        <div class="card-content">
          <div v-if="showThis">
            <p>{{ value || "No Value"}}</p>
            <p>{{ nothing || "This will show, if there is no value."}}</p>
          </div>
          <div v-show="showThis">
            <p>v-show adds style tag, doesn't remove from dom</p>
          </div>
        </div>
      </div>
    </div>

    <!-- v-for loops -->
    <div class="content">
      <p class="title">v-for</p>
      <p>Double Click to change the "isFavorite" property</p>
      <ul class="list">
        <li
          v-for="item in myArray"
          :class="{ fav: item.isFavorite }"
          :key="item.message"
          @dblclick="toggleFavorite(item)"
        >{{ item.title }} - {{ item.body }}</li>
      </ul>
    </div>

    <!-- Mouse Events -->
    <p class="title">Mouse Events</p>
    <div class="column">Mouse Event: {{ mouseEventMsg }}</div>
    <div class="columns">
      <div
        class="box column"
        v-on:mouseover="mouseOverHndl($event, 'Other Arguments')"
      >Mouse Over (enter)</div>
      <div class="box column" @mouseleave="mouseLeaveHndl">Mouse Leave</div>
      <div class="box column" @dblclick="mouseDblClickHndl">Double Click</div>
    </div>
    <div class="hero">
      <div class="box" @mousemove="mouseMoveHndl">Mouse Position: x:{{mouseX}} and y:{{mouseY}}</div>
    </div>

    <!-- Binding -->
    <h3>Binding</h3>
    <div>
      <a v-bind:href="url">Bound Link (using 'v-bind:')</a>
      <a :href="url">Bound Link (shortcut using ':')</a>
    </div>

    <!-- Dynamic classes -->
    <h3>Dynamic classes</h3>
    <div>
      <a v-bind:href="url">Bound Link</a>
      <a :href="url">Bound Link</a>
    </div>
  </div>
</template>

<script>
export default {
  el: "App",
  components: {},
  data() {
    return {
      showThis: true,
      value: "If there is Value, it will show.",
      nothing: "",
      mouseEventMsg: "",
      mouseX: 0,
      mouseY: 0,
      myArray: [
        {
          title: "Meditation",
          body:
            "Letterpress seitan chicharrones tumeric food truck crucifix fingerstache asymmetrical paleo chartreuse williamsburg before they sold out.",
          isFavorite: true,
        },
        {
          title: "Microdosing ",
          body:
            "Selvage truffaut distillery gentrify messenger bag swag austin kogi synth palo santo shoreditch narwhal brooklyn seitan.",
          isFavorite: false,
        },
        {
          title: "Helvetica ",
          body:
            "Jianbing banjo thundercats iPhone craft beer selvage drinking vinegar. ",
          isFavorite: false,
        },
      ],
      url: "https://www.youtube.com/watch?v=CYPZBK8zUik",
    };
  },
  methods: {
    toggleFavorite(item) {
      item.isFavorite = !item.isFavorite;
    },
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
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style-type: none;
}
li.fav {
  background: #5ceebd;
}
</style>