<template>
  <div>
    <div class="weeds">
      <img src="@/assets/bkg_weed_float2.png" />
    </div>
    <br />
    <br />
    <div>
      <h1>Catalogue</h1>

      <hr />
      <br />
      <div class="container bg-dark p-4">
        <button @click="getData">GET</button>
        FULL CATALOGUE
      </div>

      <div class="iconer container bg-light d-flex p-4">
        <div>
          <img class="icons" src="@/assets/icon_comics.png" />
          <p>comics</p>

          <ul>
            <li v-for="item in CatData" :key="item">
              {{ item.name }}
            </li>
          </ul>
        </div>

        <div>
          <img class="icons" src="@/assets/icon_pencil.png" />
          <p>drawings</p>

          <ul>
            <li class="drawing" v-for="item in CatData" :key="item">
              <div class="container d-flexbox">
                <p class="drawings">{{ item.name }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <img class="icons" src="@/assets/icon_canvas.png" />
          <p>paintings</p>

          <ul>
            <li v-for="item in CatData" :key="item">
              {{ item.year }}
            </li>
          </ul>
        </div>

        <div>
          <img class="icons" src="@/assets/icon_sculpture.png" />
          <p>sculptures</p>
        </div>

        <div>
          <img class="icons" src="@/assets/icon_music.png" />
          <p>music</p>

          <ul>
            <li class="drawing" v-for="item in CatData" :key="item">
              <div class="container d-flexbox">
                <p>
                  {{ item.name }}
                </p>
                <h5>|</h5>

                <p>{{ item.year }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogueFull",
  data() {
    return {
      CatData: [
        { name: "Name1", type: "painting", year: "2000" },
        { name: "Name2", type: "painting", year: "2001" },
        { name: "Name3", type: "painting", year: "2002" },
      ],
    };
  },

  methods: {
    getData() {
      this.CatData.map((o) => {
        o.name;
      });
      console.log(this.CatData);
    },
  },
};
</script>

<style lang="css" scoped>
div {
  align-content: center;
  text-align: center;
}
.icons {
  width: 75px;
  padding: 10px;
}
p {
  font-size: 6px;
  color: black;
}
.iconer {
  justify-content: space-between;
}

.drawing {
  list-style: none;
}
.drawings {
  background-color: whitesmoke;
  border: solid 1px grey;
  border-radius: 10px;
  padding: 5px;
  line-height: 1em;
  color: rgb(200, 207, 214);
}
.weeds {
  opacity: 0.8;
  position: absolute;
  margin-top: 0px;
}
</style>
