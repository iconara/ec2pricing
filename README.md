# EC2 Instance Types & Pricing

Have you ever found yourself scrolling up and down the [EC2 Pricing Page][1], and moving back and forth between [the new instances][1] and [the old][2] when deciding on which EC2 instance type to choose? Wouldn't you just want all of it in one sortable table?

You can find that table on [ec2pricing.iconara.info][3], and the code that parses the pricing feeds is in this repository.

## Running it locally and making changes

Open two terminals, in the first run this:

```
$ cd public
$ make setup
$ make
$ make serve
```

… which will install all dependencies, compile and concatenate all of the sources, and finally start a web server on [port 8000](http://localhost:8000/).

In the other terminal you run this:

```
$ make auto
```

… which will watch the sources for changes and compile and concatenate them.

The pricing data is loaded from AWS directly so you need an internet connection to test even when running locally.

## Copyright

2012-2014, [Theo Hultberg / @iconara][4]

  [1]: http://aws.amazon.com/ec2/pricing/
  [2]: http://aws.amazon.com/ec2/previous-generation/
  [3]: http://ec2pricing.iconara.info/
  [4]: http://twitter.com/iconara