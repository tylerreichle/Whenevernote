require 'test_helper'

class TagsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tags_controller_create_url
    assert_response :success
  end

  test "should get index" do
    get tags_controller_index_url
    assert_response :success
  end

  test "should get destroy" do
    get tags_controller_destroy_url
    assert_response :success
  end

end
