<template>

  <section>
    <div class="container">
      <h1>
        <i class="fa fa-search" aria-hidden="true"></i>
        ふるさと納税新着情報
      </h1>
      <template
        v-for="item in search_list"
        v-bind:item="item"
        >
        <div class="panel panel-default">
          <div class="panel-heading">
            <h1 class="h3">
              <a :href="item.link">
                {{item.author}}
                <small>
                  {{item.pubDate}}
                </small>
              </a>
            </h1>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12">
                <p class="lead">
                  <a :href="item.link">
                    {{item.title}}
                  </a>
                </p>
                <p v-html="item.content" class="content"></p>
                <p class="text-right">
                  <a :href="item.link">
                    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    {{item.author}}のふるさと納税はこちら
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>

</template>

<script>
import Axios from 'axios'

const jsonUri = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.furusato-tax.jp%2Ffeed%2Fnotifications.xml';

export default {
  data() {
    return {
      search_list: []
    }
  },
  created() {
    Axios.get(jsonUri).then((res) => {
      this.search_list = res.data.items;
    });
  }
}

</script>
