class Url < ActiveRecord::Base
	validates_format_of :string, :with => URI::regexp(%w(http https))

	def up_1
		self.click_count ||= 0
		self.click_count += 1
	end
end
