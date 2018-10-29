<?php

use Illuminate\Database\Seeder;
use App\Models\Member;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Member::create([
            'member_id' => 1,
            'email' => 'adm@vue-admin.com',
            'name' => 'ADM',
            'password' => '7c4a8d09ca3762af61e59520943dc26494f8941b'
        ]);
    }
}
