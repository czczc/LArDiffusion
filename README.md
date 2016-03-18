# Everything You Need to Know About Liquid Argon Properties

This website is constructed using the [Twitter Bootstrap](http://getbootstrap.com/) framework to make it [responsive](https://en.wikipedia.org/wiki/Responsive_web_design) across a wide range of devices. 


## Download and Set Up a Webserver

```bash
git clone https://github.com/czczc/LArProperties
cd LArProperties
python -m SimpleHTTPServer
```

Now open a web browser and go to <http://localhost:8000>

## Add Static Contents

The static contents can be directly added to the [index.html](index.html) file inside the corresponding `<section></section>` tag. To make the format consist, please use the following guidelines:

### Table
```html
<table class="table table-bordered table-striped">
  <caption>Caption</caption>
  <thead>
    <tr>
      <th>field1</th>
      <th>field2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value1</td>
      <td>value2</td>
    </tr>
  </tbody>
</table>
```

### Panel
```html
<div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">Panel Title</h3>
  </div>
  <div class="panel-body">
    Panel text.
  </div>
</div>
```

### Simple Paragraph
```html
<div class="row">
  <div class="col-md-12">
    Text.
  </div>
</div>
```

### Two-column text + image
```html
<div class="row">
  <div class="col-md-8">
    Text.
  </div>
  <div class="col-md-4">
    <img src="img/xxx.xxx" alt="" width="100%">
  </div>
</div>
```
