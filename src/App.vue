<template>
<div>
  {{ value || "Nothing" }}
</div>
</template>

<script>
export default {
  // data, functions
  //template: '<p>Template</p>'
  data() {
    return {
      value: 1,
      nothing: '',
    }
  }
}
</script>


<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>