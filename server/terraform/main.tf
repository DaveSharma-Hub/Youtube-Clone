resource "aws_instance" "custom_server_application" {
    ami= var.ami
    instance_type = var.instance_type
}