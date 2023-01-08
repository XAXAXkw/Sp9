<template>
  <div>
    <h1>TO DO List</h1>

    <div class="container d-flex justify-content-evenly">
      <div>
        <input class="inputDark" />
        <button class="btn btn-sm text-success m-1">ADD</button>
      </div>
    </div>

    <hr />
    <div class="LIST">
      <ol>
        <li>
          <h4 style="color: white">
            Lkghjghf

            <button class="btn btn-sm text-success m-1">V</button>
            <button class="btn btn-sm text-danger m-1">X</button>
          </h4>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
};
</script>

<style lang="scss" scoped>
.inputDark {
  margin: 15px;
  height: 30px;
  padding: 5px;
  border-radius: 0.5em;
  font-size: 8px;
  width: 200px;
  background-color: black;
  border: solid 1px yellowgreen;
  color: green;
  box-shadow: 1px 1px 100px aquamarine;
}

.LIST {
  margin-left: 20%;
  font-size: 1.5vmax;
}
li {
  display: block;
  width: 50%;
  text-decoration: underline 0.5px;
  border: dashed 1px rgba(0, 100, 0, 0.391);
  padding: 10px;
  margin: 5px;
}
</style>
