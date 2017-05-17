class RemoveSuperIndexFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_index(:users, name: 'index_users_on_username_and_email_and_session_token')
  end
end
