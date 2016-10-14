require 'test_helper'

class TokimonsControllerTest < ActionController::TestCase
  setup do
    @tokimon = tokimons(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tokimons)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create tokimon" do
    assert_difference('Tokimon.count') do
      post :create, tokimon: { dark: @tokimon.dark, electric: @tokimon.electric, fight: @tokimon.fight, fire: @tokimon.fire, fly: @tokimon.fly, ice: @tokimon.ice, psychic: @tokimon.psychic, theight: @tokimon.theight, tname: @tokimon.tname, total: @tokimon.total, trainer_id: @tokimon.trainer_id, tweight: @tokimon.tweight, water: @tokimon.water }
    end

    assert_redirected_to tokimon_path(assigns(:tokimon))
  end

  test "should show tokimon" do
    get :show, id: @tokimon
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @tokimon
    assert_response :success
  end

  test "should update tokimon" do
    patch :update, id: @tokimon, tokimon: { dark: @tokimon.dark, electric: @tokimon.electric, fight: @tokimon.fight, fire: @tokimon.fire, fly: @tokimon.fly, ice: @tokimon.ice, psychic: @tokimon.psychic, theight: @tokimon.theight, tname: @tokimon.tname, total: @tokimon.total, trainer_id: @tokimon.trainer_id, tweight: @tokimon.tweight, water: @tokimon.water }
    assert_redirected_to tokimon_path(assigns(:tokimon))
  end

  test "should destroy tokimon" do
    assert_difference('Tokimon.count', -1) do
      delete :destroy, id: @tokimon
    end

    assert_redirected_to tokimons_path
  end
end
