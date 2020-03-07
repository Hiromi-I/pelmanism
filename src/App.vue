<template>
  <div id="app">
    <header class="header">
      <div class="centeringContainer">
        <h1 class="logo">Pelmanism</h1>
      </div>
    </header>

    <main class="wrapper">
      <GameInfo />
      <CardList />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GameInfo from "@/components/GameInfo.vue";
import CardList from "@/components/CardList.vue";

@Component({
  components: {
    GameInfo,
    CardList
  },
  name: "App"
})
export default class App extends Vue {}
</script>

<style>
/*  http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/* === reset.css end ==================== */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: radial-gradient(#ececec 25%, transparent 0),
    radial-gradient(#ececec 25%, transparent 0);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  width: 100vw;
  height: 100vh;
}
.header {
  background-color: black;
  padding-bottom: 10px;
}
.centeringContainer {
  width: 1135px;
  margin: 0 auto;
}
.logo {
  font-family: "Monofett", cursive;
  font-size: 60px;
  color: red;
  text-align: left;
}
</style>
