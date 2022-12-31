resource "aws_cloudfront_distribution" "cdn_cloudfront_resource"{

}

resource "aws_s3_bucket" "main_video_bucket" {
  bucket = "video_page_video_bucket"

  tags = {
    Name = "video"
  }
}
resource "aws_s3_bucket" "shorts_video_bucket" {
  bucket = "shorts_page_video_bucket"

  tags = {
    Name = "video"
  }
}
resource "aws_s3_bucket" "video_thumbnail_bucket" {
  bucket = "video_thumbnail_bucket"

  tags = {
    Name = "video"
  }
}