<template>
  <footer class="footer">
    <div class="footer__brand">
      <h2>
        <img src="@/assets/images/ranek.svg" alt />
      </h2>
    </div>
    <div class="footer__social-networks">
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <font-awesome-icon :icon="['fab', 'instagram']" />
      <font-awesome-icon :icon="['fab', 'pinterest']" />
    </div>
    <div class="footer__copyright">
      <font-awesome-icon :icon="['far', 'copyright']" />
      <span>2020</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  top: 285px;
  border: 1px solid transparent;
  padding: 50px 30px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  &__brand {
    border: 1px solid transparent;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    position: relative;
    h2 {
      img {
        width: 120px;
      }
      &:before,
      &:after {
        content: "";
        width: calc(50% - 150px);
        display: inline-block;
        height: 1px;
        background: color(neutral, black);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
    }
  }
  &__social-networks {
    display: block;
    position: relative;
    height: 110px;
    svg {
      @include font-size(max);
      cursor: pointer;
      transition: all 0.3s;
      &:not(:last-of-type) {
        margin-right: 50px;
      }
      &:hover {
        transform: scale(1.5);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0.08rem;
      background: color(neutral, black);
      height: 50px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transform: scale(1, 1.1);
    }
  }
  &__copyright {
    padding: 20px 20px 0;
    span {
      margin-left: 5px;
    }
  }
}
</style>
