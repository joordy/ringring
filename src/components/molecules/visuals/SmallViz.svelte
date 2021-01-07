<script>
  import VizTitle from '@/components/atoms/VizHeader.svelte'
  export let title
  let valuenumber = '15'
  let compared = '20%'
  let timestamp = 'gisteren'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  div {
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    article {
      padding: $m15 $m20;
      h4 {
        margin-bottom: $m5;
      }
      span {
        font-weight: $bold;
        font-size: 32px;
      }
      h5 {
        margin-top: $m5;
        color: $ui-traffic-green;
      }
    }
  }
</style>

<div>
  <article>
    <VizTitle {title} />
    <span>{valuenumber}</span>
    <h5>+{compared} t.o.v. {timestamp}</h5>
  </article>
</div>
