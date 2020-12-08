<script>
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';
  console.log(routes);
</script>

<style global>
  @import '../assets/global.css';
</style>

<Router {routes} />
