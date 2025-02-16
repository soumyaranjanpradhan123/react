<script>
  import { onMount } from "svelte";
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 50px;
  }

  /* Candle Base */
  .candle {
    position: relative;
    width: 40px;
    height: 100px;
    background: linear-gradient(to bottom, #fff1d6, #e0c09f);
    border-radius: 10px;
    box-shadow: inset 2px -2px 5px rgba(0, 0, 0, 0.2);
  }

  /* Candle Flame */
  .flame {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 40px;
    background: radial-gradient(circle, #ff9800 30%, #ff5722 80%);
    border-radius: 50% 50% 50% 50%;
    animation: flicker 0.15s infinite alternate;
  }

  @keyframes flicker {
    0% {
      transform: translateX(-50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) scale(1.1);
      opacity: 0.8;
    }
  }

  /* Tomato */
  .tomato {
    position: relative;
    width: 70px;
    height: 70px;
    background: radial-gradient(circle, #ff4d4d, #d32f2f);
    border-radius: 50%;
    box-shadow: inset 2px -2px 5px rgba(0, 0, 0, 0.2);
  }

  /* Tomato Stem */
  .stem {
    position: absolute;
    top: -10px;
    left: 50%;
    width: 30px;
    height: 20px;
    background: green;
    border-radius: 50%;
    transform: translateX(-50%);
  }
</style>

<div class="container">
  <div class="candle">
    <div class="flame"></div>
  </div>
  <div class="tomato">
    <div class="stem"></div>
  </div>
  <h1>Knowledge is tomato is a fruit  and not putting it in salad is wisdom </h1>
</div>
