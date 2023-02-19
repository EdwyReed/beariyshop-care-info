<template>
  <div id="modal">
    <div class="modal-content">
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
      <span @click="$emit('clicked')">{{ buttonText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
#modal {
  background-color: rgba(212, 176, 214, 0.56);
  position: fixed;
  z-index: 1000;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  display: grid;
  place-items: center;

  .modal-content {
    background: linear-gradient(113.26deg, #EEB5D3 0%, #E5B3D4 0.01%, #E5B3D4 48.11%, #D0AFD7 98.7%);
    box-sizing: border-box;
    padding: 3rem 1.5rem;
    border-radius: 3rem;
    text-align: center;
    font-size: 3rem;
    width: 61rem;

    //box-shadow: 0 0 2rem #ffc6e5;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    * {
      margin: 0;
    }

    span {
      margin-top: 3rem;
      background: #D4B0D6;
      border-radius: 3rem;
      padding: 1.7rem 4.7rem;
      box-shadow: 0 0 2rem #ffc6e5;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 700px) {
    .modal-content {
      margin-top: auto;
      border-radius: 0;
      font-size: 2.5rem;
      width: 100%;
    }
  }
}
</style>