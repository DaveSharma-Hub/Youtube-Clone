resource "aws_instance" "custom_server_application" {
    ami=            "ami-0ff8a91507f77f867"
    instance_type = "t4g.micro"
}