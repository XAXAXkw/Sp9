<template>
  <div>
    <div class="container">
      <p style="color: rgb(42, 74, 63);">Artwork</p>
      <h1>327</h1>
      CARD HEADER<img style="height: 25px" src="@/assets/cursor.gif" />
      <p>102</p>

      <h6  style="color:  rgb(42, 74, 63)">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate animi sequi
        aperiam temporibus? Recusandae, iure hic. Distinctio facilis id, corporis veniam
        laboriosam exercitationem, culpa inventore, qui voluptate quaerat vero accusamus?
      </h6>
      <hr />

      <div class="pic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nam non ullam
        enim voluptatibus nihil, voluptate rem similique facilis modi pariatur porro eos
        tempore odit animi consequuntur minus ad dignissimos.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
};
</script>

<style lang="scss" scoped>
$color: green;
p {
  color: $color;
  font-size: 0.8em;
}

.pic {
  color: rgb(6, 41, 38);
  background: rgb(19, 65, 29);
  background: linear-gradient(
    153deg,
    rgba(19, 65, 29, 1) 8%,
    rgba(34, 195, 70, 1) 49%,
    rgba(45, 253, 175, 1) 100%
  );
  height: 450px;
  width: 350px;
  align-self: center;
  margin: auto;
  padding: 10px;
}
h6{
  font-size: 0.5em;
}
</style>
