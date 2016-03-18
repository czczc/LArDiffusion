# Everything You Need to Know About Liquid Argon Properties

This website is constructed using the [Twitter Bootstrap](http://getbootstrap.com/) framework to make it [responsive](https://en.wikipedia.org/wiki/Responsive_web_design) across a wide range of devices. 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Download and Set Up a Webserver](#download-and-set-up-a-webserver)
- [Add Static Contents](#add-static-contents)
  - [Table](#table)
  - [Panel](#panel)
  - [Panel Title](#panel-title)
  - [Simple paragraph](#simple-paragraph)
  - [Two-column text + image](#two-column-text--image)
  - [Math formula](#math-formula)
- [Add Interactive Plots](#add-interactive-plots)
  - [Prepare data](#prepare-data)
  - [Convert to JSON format](#convert-to-json-format)
  - [Load into webpage](#load-into-webpage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Download and Set Up a Webserver

```bash
git clone https://github.com/czczc/LArProperties
cd LArProperties
python -m SimpleHTTPServer
```

Now open a web browser and go to <http://localhost:8000>

## Add Static Contents

The static contents can be directly added to the [index.html](index.html) file inside the corresponding `<section></section>` tag. To make the format consistent, please use the following guidelines:

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

### Simple paragraph
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

### Math formula
Latex math formula can be inserted into the html directly. It is then automatically rendered by [MathJax](https://www.mathjax.org/).
- Inline: wrap latex formula in `$ ... $`
- Block: wrap latex formula in `\[ ... \]`


## Add Interactive Plots
Interactive plots can be added as shown in [this example](http://lar.bnl.gov/properties/#particle-pass). The plots are rendered by the [Highchharts](http://lar.bnl.gov/properties/#particle-pass) library.

### Prepare data

### Convert to JSON format

### Load into webpage
