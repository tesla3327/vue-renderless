<template>
  <Renderless :provide="provide" >
    <template slot-scope="{ provide }">
      <Event
        event="popstate"
        global
        @fired="handlePopstate"
      />
    </template>
  </Renderless>
</template>

<script>
import Renderless from '../../../src/components/Renderless.vue';
import Event from '../../../src/components/Event.vue';
import Log from '../../../src/components/Log.vue';

export default {
  name: 'QueryParams',

  components: {
    Renderless,
    Event,
    Log,
  },

  data() {
    return {
      queryParams: {},
    };
  },

  created() {
    this.getQueryParams();
  },

  computed: {
    provide() {
      return {
        queryParams: this.queryParams,
        setQueryParam: this.setQueryParam,
      };
    },
  },

  methods: {
    handlePopstate() {
      this.getQueryParams();
    },

    getQueryParams() {
      const pairs = decodeURI(window.location.search)
        .substring(1)
        .split('&');

      this.queryParams = pairs.reduce((params, pair) => {
        const [key, value] = pair.split('=');
        return {
          ...params,
          [key]: value,
        };
      }, {});
    },

    setQueryParam(key, value) {
      const newParams = {
        ...this.queryParams,
        [key]: value,
      };

      const queryString = Object.keys(newParams)
        .filter(key => key !== '')
        .reduce((string, key) => {
          return `${string}${key}=${newParams[key]}&`;
        }, '');

      // Remove last '&' off of the end
      const searchString = '?' + queryString.substring(0, queryString.length - 1);

      // Add it to the url
      const { href } = window.location;
      const searchIndex = href.indexOf('?');
      const newUrl = href.substring(0, searchIndex) + searchString;

      // Update the URL
      window.history.pushState({}, '', encodeURI(newUrl));

      // Update the query params
      this.queryParams = newParams;
    }
  },
}
</script>
