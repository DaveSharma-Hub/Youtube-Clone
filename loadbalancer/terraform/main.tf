resource "aws_lb" "youtube_loadbalancer" {
  name               = var.resource_name
  internal           = false
  load_balancer_type = var.lb_type
  security_groups    = [aws_security_group.lb_sg.id]
  subnets            = [for subnet in aws_subnet.public : subnet.id]

  enable_deletion_protection = true

#   access_logs {
#     bucket  = aws_s3_bucket.lb_logs.bucket
#     prefix  = "youtube-lb"
#     enabled = true
#   }

  tags = {
    Environment = "production"
  }
}