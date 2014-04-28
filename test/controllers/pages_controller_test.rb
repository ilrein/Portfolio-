require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get about_me" do
    get :about_me
    assert_response :success
  end

  test "should get my_work" do
    get :my_work
    assert_response :success
  end

  test "should get resume" do
    get :resume
    assert_response :success
  end

  test "should get skills" do
    get :skills
    assert_response :success
  end

  test "should get contact_me" do
    get :contact_me
    assert_response :success
  end

end
