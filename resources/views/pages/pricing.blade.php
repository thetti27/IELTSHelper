
<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Pricing') }}
        </h2>
    </x-slot>

    <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

.columns {
  float: left;
  width: 33.3%;
  padding: 8px;
}

.price {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.price:hover {
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}

.price .header {
  background-color: #111;
  color: white;
  font-size: 25px;
}

.price li {
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.price .grey {
  background-color: #eee;
  font-size: 20px;
}

.button {
  background-color: #0439aa;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}

@media only screen and (max-width: 600px) {
  .columns {
    width: 100%;
  }
}
</style>
</head>
<body>

<h2 style="text-align:center">IELTS Helper Pricing</h2>

<div class="columns">
  <ul class="price">
    <li class="header">Beginner</li>
    <li class="grey">Rs.4000/month</li>
    <li>10GB Storage</li>
    <li>8 lessons</li>
    <li>1GB Bandwidth</li>
    <li class="blue"><a href="#" class="button">More Info</a></li>
  </ul>
</div>

<div class="columns">
  <ul class="price">
    <li class="header" style="background-color:#0439aa">Intermediate</li>
    <li class="grey">Rs.6000/month</li>
    <li>25GB Storage</li>
    <li>12 lessons</li>
    <li>2GB Bandwidth</li>
    <li class="blue"><a href="#" class="button">More Info</a></li>
  </ul>
</div>

<div class="columns">
  <ul class="price">
    <li class="header">Advanced</li>
    <li class="grey">Rs.8000/month</li>
    <li>50GB Storage</li>
    <li>15 lessons</li>
    <li>5GB Bandwidth</li>
    <li class="blue"><a href="#" class="button">More Info</a></li>
  </ul>
</div>

</body>
</html>

</x-app-layout>
