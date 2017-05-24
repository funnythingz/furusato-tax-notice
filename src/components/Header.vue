<template>
  <header>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link :to="{name: 'root'}" class="logo">
            <span class="logo-text">
              <i class="fa fa-gift" aria-hidden="true"></i>
              ふるさと納税情報サイト
            </span>
          </router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link :to="{name: 'about'}">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                About
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
