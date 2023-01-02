variable "ami"{
    default="ami-0ff8a91507f77f867"
    type = string
    description = "amazon machine image type"
}

variable "instance_type"{
    default = "t4g.micro"
    type = string
    description = "ec2 cluster machine specifications"
}